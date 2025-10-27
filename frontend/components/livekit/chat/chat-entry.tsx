import * as React from 'react';
import type { MessageFormatter, ReceivedChatMessage } from '@livekit/components-react';
import { cn } from '@/lib/utils';
import { useChatMessage } from './hooks/utils';

export interface ChatEntryProps extends React.HTMLAttributes<HTMLLIElement> {
  /** The chat massage object to display. */
  entry: ReceivedChatMessage;
  /** Hide sender name. Useful when displaying multiple consecutive chat messages from the same person. */
  hideName?: boolean;
  /** Hide message timestamp. */
  hideTimestamp?: boolean;
  /** An optional formatter for the message body. */
  messageFormatter?: MessageFormatter;
}

export const ChatEntry = ({
  entry,
  messageFormatter,
  hideName,
  hideTimestamp,
  className,
  ...props
}: ChatEntryProps) => {
  const { message, hasBeenEdited, time, locale, name } = useChatMessage(entry, messageFormatter);

  const isUser = entry.from?.isLocal ?? false;
  const messageOrigin = isUser ? 'remote' : 'local';

  return (
    <li
      data-lk-message-origin={messageOrigin}
      title={time.toLocaleTimeString(locale, { timeStyle: 'full' })}
      className={cn('group flex flex-col gap-1', className)}
      {...props}
    >
      {(!hideTimestamp || !hideName || hasBeenEdited) && (
        <div className="flex w-full items-center justify-between">
          {!hideName && (
            <strong
              className={cn(
                'rounded-full px-2 py-1 text-xs font-semibold',
                isUser
                  ? 'bg-blue-500/20 text-blue-600 dark:text-blue-300'
                  : 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-300'
              )}
            >
              {name}
            </strong>
          )}

          {!hideTimestamp && (
            <span className="ml-2 font-mono text-xs text-gray-500 dark:text-gray-400">
              {hasBeenEdited && '*'}
              {time.toLocaleTimeString(locale, { timeStyle: 'short' })}
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-4 py-2 text-sm',
          'shadow-sm',
          isUser
            ? 'ml-auto rounded-tr-none bg-blue-500 text-white'
            : 'mr-auto rounded-tl-none bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
        )}
      >
        {message}
      </div>
    </li>
  );
};
