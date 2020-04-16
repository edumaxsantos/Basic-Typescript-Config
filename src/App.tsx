import React from 'react';
import './App.css';

type Color = 'black' | 'white';

const App: React.FC = () => {
    const isBlack = (value: Color): boolean => {
        return value === 'black' ? true : false;
    };
    const valida = (): void => {
        alert(isBlack('black'));
    };
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={valida}>É preto?</button>
            </header>
        </div>
    );
};

export default App;
