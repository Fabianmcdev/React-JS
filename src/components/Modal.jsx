import '../App.css'

export function Modal({title}){
    return (
        <details className='modal'>
            <div className='modal-content'>
                <h2>{title}</h2>
            </div>
        </details>
    )
}