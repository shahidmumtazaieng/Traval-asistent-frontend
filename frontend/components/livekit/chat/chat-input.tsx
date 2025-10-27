import { useEffect, useRef, useState } from 'react';
import { PaperPlaneRight } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatInputProps extends React.HTMLAttributes<HTMLFormElement> {
  onSend?: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, className, disabled, ...props }: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit?.(e);
    if (message.trim().length > 0) {
      onSend?.(message);
      setMessage('');
    }
  };

  const isDisabled = disabled || message.trim().length === 0;

  useEffect(() => {
    if (disabled) return;
    // when not disabled refocus on input
    inputRef.current?.focus();
  }, [disabled]);

  return (
    <form
      {...props}
      onSubmit={handleSubmit}
      className={cn(
        'flex items-center gap-2 rounded-xl bg-white dark:bg-gray-900',
        'border border-gray-200 dark:border-gray-700',
        'shadow-sm shadow-gray-200/50 dark:shadow-gray-900/50',
        'px-3 py-2',
        className
      )}
    >
      <input
        autoFocus
        ref={inputRef}
        type="text"
        value={message}
        disabled={disabled}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-transparent text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
      <Button
        size="sm"
        type="submit"
        variant={isDisabled ? 'secondary' : 'primary'}
        disabled={isDisabled}
        className="rounded-full p-2 font-medium"
      >
        <PaperPlaneRight weight="bold" className="h-4 w-4" />
      </Button>
    </form>
  );
}
