import { SocialData } from './social-data';

export interface Code {
  id: number;
  codigo: string;
  color: string;
  description: string;
  language: string;
  name: string;
  socialData: SocialData;
}
