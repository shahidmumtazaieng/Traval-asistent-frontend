import { type TrackReference, VideoTrack } from '@livekit/components-react';
import { cn } from '@/lib/utils';

interface AgentAudioTileProps {
  videoTrack: TrackReference;
  className?: string;
}

export const AvatarTile = ({
  videoTrack,
  className,
  ref,
}: React.ComponentProps<'div'> & AgentAudioTileProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-gradient-to-br from-indigo-500/20 to-purple-600/20',
        'rounded-xl border border-indigo-500/30 backdrop-blur-sm',
        'shadow-lg shadow-indigo-500/10',
        'overflow-hidden',
        className
      )}
    >
      <div className="relative h-full w-full">
        <VideoTrack
          trackRef={videoTrack}
          width={videoTrack?.publication.dimensions?.width ?? 0}
          height={videoTrack?.publication.dimensions?.height ?? 0}
          className="h-full w-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-2 right-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500">
            <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
