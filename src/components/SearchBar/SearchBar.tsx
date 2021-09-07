import React, { useEffect, useState } from 'react';

import './SearchBar.css';
import { SearchIcon } from '../SearchIcon/SearchIcon';
import { MicIcon } from '../MicIcon/MicIcon';
import { useSearchBarSpeech } from './useSearchSpeech';

interface Props {
    submitFunction: (data: string) => void;
    noIcons?: Boolean;
    noSearchIcon?: Boolean;
    noMicIcon?: Boolean;
    noBorder?: Boolean;
}

export const SearchBar = ({
    submitFunction,
    noIcons,
    noSearchIcon,
    noMicIcon,
    noBorder
}: Props) => {
    const [searchData, setSearchData] = useState('');

    const { transcript, resetTranscript, toggleMic, listening } =
        useSearchBarSpeech();

    useEffect(() => {
        let text = transcript.toLowerCase();
        setSearchData(text);
    }, [transcript]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (searchData !== null && searchData !== '') {
            submitFunction(searchData);
            setSearchData('');
            resetTranscript();
        } else {
            console.log('will not submit empty string');
        }
    };

    return (
        <div>
            <div className="search_bar_container">
                {!noIcons && !noSearchIcon ? (
                    <div
                        className="search_bar_icon_container"
                        onClick={handleSubmit}
                    >
                        <SearchIcon />
                    </div>
                ) : null}
                <input
                    className="search_bar_input"
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    disabled={listening}
                    autoComplete="off"
                />
                {!noIcons && !noMicIcon ? (
                    <div
                        className="search_bar_icon_container"
                        onClick={toggleMic}
                    >
                        <MicIcon />
                    </div>
                ) : null}
            </div>
            {!noBorder ? <div className="search_bar_underline" /> : null}
        </div>
    );
};
