export function ConsoleText({text}: {text: string}) {
  return (
    <div className="font-console text-main bg-background px-3">
      <span className="text-user">user@LTPT480s</span>:
      <span className="text-path">~</span>$ <span>{text}</span>
    </div>
  );
}
