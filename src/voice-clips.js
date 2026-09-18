import warning from './audio/warning.wav';
import danger from './audio/danger.wav';
import doesNotCompute from './audio/does-not-compute.wav';
import warningMp3 from './audio/warning.mp3';
import dangerMp3 from './audio/danger.mp3';
import doesNotComputeMp3 from './audio/does-not-compute.mp3';

// Three brief TV excerpts; see AUDIO-CREDITS.md for source and attribution.
export const TV_CLIPS={
  'Warning! Warning! Warning!':{src:warning,mp3:warningMp3,duration:1.693},
  'Danger, danger!':{src:danger,mp3:dangerMp3,duration:.984},
  'That does not compute.':{src:doesNotCompute,mp3:doesNotComputeMp3,duration:1.241},
};

// Menus and automatic routines are restricted to the embedded TV recordings.
export const SOUND_BITES=Object.keys(TV_CLIPS).map(text=>({text,kind:'tv'}));
