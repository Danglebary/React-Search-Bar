import { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
    useSpeechRecognition
} from 'react-speech-recognition';

// CURRENTLY WORKING IN CHROME AND SAFARI, DOES NOT WORK IN BRAVE BROWSER.


// const appId = process.env.REACT_APP_SPEECHLY_APP_ID
//     ? process.env.REACT_APP_SPEECHLY_APP_ID
//     : '';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export const useSearchBarSpeech = () => {
    const [micState, setMicState] = useState(false);

    const { transcript, resetTranscript, listening } = useSpeechRecognition();

    const toggleMic = () => {
        setMicState(!micState);
        handleSpeech(!micState);
    };

    const handleSpeech = (shouldListen: boolean) => {
        if (shouldListen === true) {
            console.log('should start listening');
            SpeechRecognition.startListening({
                language: 'en-US'
            });
        } else {
            console.log('should stop listening')
            SpeechRecognition.stopListening();
        }
    };

    useEffect(() => {
        console.log(listening);
        if (listening === false) {
            SpeechRecognition.abortListening();
        }
    }, [listening]);

    return { toggleMic, transcript, resetTranscript, listening };
};
