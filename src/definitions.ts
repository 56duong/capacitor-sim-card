export interface SimCardPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
