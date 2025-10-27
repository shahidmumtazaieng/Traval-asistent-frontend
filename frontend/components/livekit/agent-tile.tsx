import { type AgentState, BarVisualizer, type TrackReference } from '@livekit/components-react';
import { cn } from '@/lib/utils';

interface AgentAudioTileProps {
  state: AgentState;
  audioTrack: TrackReference;
  className?: string;
}

export const AgentTile = ({
  state,
  audioTrack,
  className,
  ref,
}: React.ComponentProps<'div'> & AgentAudioTileProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-gradient-to-br from-blue-500/20 to-indigo-600/20',
        'rounded-xl border border-blue-500/30 backdrop-blur-sm',
        'shadow-lg shadow-blue-500/10',
        'flex items-center justify-center',
        className
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-indigo-500/10"></div>
        <BarVisualizer
          barCount={7}
          state={state}
          options={{ minHeight: 8 }}
          trackRef={audioTrack}
          className={cn('flex w-full items-center justify-center gap-2 px-6')}
        >
          <span
            className={cn([
              'min-h-6 w-2 rounded-full bg-blue-400',
              'origin-center transition-all duration-200 ease-linear',
              'data-[lk-highlighted=true]:bg-blue-300 data-[lk-muted=true]:bg-blue-600/50',
              'shadow-md shadow-blue-500/30',
            ])}
          />
        </BarVisualizer>
        <div className="absolute -top-2 -right-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
            <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
