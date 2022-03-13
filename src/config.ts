interface appConfigType {
  debug: () => boolean;
  environment: 'development' | 'production';
  appName: string;
  appDescription: string;
}

export const appConfig: appConfigType = {
  debug: (): boolean => appConfig.environment === 'development',
  environment: 'development',
  appName: 'AlWatr',
  appDescription: 'AlWatr description',
};
