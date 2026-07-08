/**
 * Motion Tokens
 * Centralized configuration for all animations in the project.
 * This guarantees millimeter-perfect consistency across the entire experience.
 */

export const EASINGS = {
  // Premium, cinematic entrances. Not bouncy.
  premiumEntrance: 'power3.out',
  // Smooth continuous movements
  smooth: 'power2.out',
  // Snappy, decisive movements
  snap: 'expo.out',
  // Linear for very slow continuous backgrounds
  linear: 'none'
} as const;

export const DURATIONS = {
  // Micro-interactions (hovers, clicks)
  micro: 0.25,
  // Section entries or component entries
  entrance: 0.8,
  // Important transitions
  transition: 1.2,
  // Cinematic slow reveal (e.g. Hero)
  cinematic: 1.8
} as const;

export const PARALLAX = {
  // Parallax is kept extremely subtle (max 10-20% as per spec)
  subtle: '10%',
  moderate: '15%',
  max: '20%'
} as const;
