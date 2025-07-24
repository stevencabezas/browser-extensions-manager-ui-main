import React from 'react'
export default function Extension(props){

    function handleIsActive(){
        
        props.setListExtensions(prev => {
            return prev.map(extension => {
                if(extension.name === props.name){
                    return {
                        ...extension,
                        isActive: !extension.isActive
                    };
                }
                return extension;
            })
        })
    }

    function removeExtension(){
        props.setListExtensions(prev => {
            return prev.map(extension => {
                if(extension.name === props.name){
                    return {
                        logo: '',
                        name: '',
                        description: '',
                        isActive: ''
                    };
                }
                return extension;
            })
        })
    }

    return (
        
        <div className={props.mode === 'dark' ? 'extension-card dark-mode' : 'extension-card'}>
        <div className="extension-card-description">
            <img src={props.logo} alt="DevLens"/>
            <div className={props.mode === 'dark' ? 'card-description dark-mode' : 'card-description'}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            </div>
        </div>

        <div className={props.mode === 'dark' ? 'extension-card-actions dark-mode' : 'extension-card-actions'}>
            <button onClick={removeExtension}>Remove</button>
            <label className="custom-toggle">
            <input className="toggle-extension" type="checkbox" checked={props.isActive} onChange={handleIsActive} />
            <span className="slider"></span>
            </label>
        </div>

        </div>
    )
}