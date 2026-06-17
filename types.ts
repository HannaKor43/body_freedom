/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CharacterType = 'leader' | 'cinderella' | 'star';

export interface QuizOption {
  text: string;
  type: CharacterType;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

export interface Review {
  id: number;
  name: string;
  country: string;
  quote: string;
  text: string;
  rating: number;
  type?: string;
}

export interface CoursePackage {
  id: 'solo' | 'group';
  title: string;
  priceUah: number;
  oldPriceUah: number;
  description: string;
  features: string[];
  bonuses: string[];
  badge?: string;
}

export interface OrderState {
  name: string;
  email: string;
  phone: string;
  packageId: 'solo' | 'group';
  characterType?: CharacterType;
}
