import React from 'react';

export default ({
    footerOptions
}) => (
    <section className="easyModal__footer">
        {
            footerOptions.map(({
                label = 'OK',
                type = 'default',
                onClick = () => {}
            }, n) => (
                <button 
                    key={'option_' + n} 
                    className={`easyModal__footer--${type}Button`} 
                    onClick={onClick}>
                    {
                        label
                    }
                </button>
            ))
        }
    </section>
);