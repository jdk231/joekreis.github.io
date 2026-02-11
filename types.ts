
export enum ScreenState {
  PHISHING = 'PHISHING',
  QUESTION = 'QUESTION',
  SUCCESS = 'SUCCESS'
}

export interface SecurityReport {
  threatLevel: string;
  reason: string;
  remedy: string[];
}
