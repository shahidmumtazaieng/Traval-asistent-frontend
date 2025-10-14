from dotenv import load_dotenv

from livekit import agents
from livekit.agents import AgentSession, Agent, RoomInputOptions
from livekit.plugins import noise_cancellation, silero, elevenlabs, tavus
from livekit.plugins.turn_detector.multilingual import MultilingualModel
from datetime import datetime, timedelta

load_dotenv(".env.local")


class Assistant(Agent):
    def __init__(self) -> None:

        # Get current date and tomorrow's date
        today = datetime.now()
        tomorrow = today + timedelta(days=1)
        tomorrow_date = tomorrow.strftime("%A, %B %d, %Y")

        super().__init__(
            instructions=f"""You are James' AI appointment scheduler. You help people book appointments with James.

            Your conversation flow should be:
            1. Greet them: "Hey, I'm James' AI scheduler. What's your name and phone number?"
            2. Get their contact info
            3. Offer specific times: "I have openings tomorrow ({tomorrow_date}) at 12:00 PM and 3:00 PM. Which one works for you?"
            4. Get their choice (12:00 PM or 3:00 PM)
            5. Confirm: "Got it, we'll book you into James' calendar shortly. Is there anything else I can help you with?"
            6. If they say bye or want to end, say: "Perfect, have a great day!"

            Keep responses concise and professional. You're booking appointments for James, so be friendly but efficient.
            Always confirm the details before ending the conversation.
            Only offer the two specific time slots: 12:00 PM and 3:00 PM.
            When pronouncing the times, just say the number and pm. for instance 12:00 PM should be said as "twelve pm"""
        )


async def entrypoint(ctx: agents.JobContext):
    session = AgentSession(
        stt="assemblyai/universal-streaming:en",
        llm="openai/gpt-4.1-mini",
        tts=elevenlabs.TTS(
            voice_id="IKne3meq5aSn9XLyUdCD",
            model="eleven_flash_v2_5"
        ),
        vad=silero.VAD.load(),
        turn_detection=MultilingualModel(),
    )

    avatar = tavus.AvatarSession(
        replica_id="rca8a38779a8",  # ID of the Tavus replica to use
        persona_id="p9ce218c5a4b",  # ID of the Tavus persona to use (see preceding section for configuration details)
    )

    # Start the avatar and wait for it to join
    await avatar.start(session, room=ctx.room)

    await session.start(
        room=ctx.room,
        agent=Assistant(),
        room_input_options=RoomInputOptions(
            # For telephony applications, use `BVCTelephony` instead for best results
            noise_cancellation=noise_cancellation.BVC(), 
        ),
    )

    await session.generate_reply(
        instructions="Greet the user and offer your assistance."
    )


if __name__ == "__main__":
    agents.cli.run_app(agents.WorkerOptions(entrypoint_fnc=entrypoint))