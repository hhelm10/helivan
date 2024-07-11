export default async function About() {
    return (
    <div>
        <div className="static-header">
            <p className='text-blue-1 text-bold text-4xl'> <a href="/"> HLVN// </a>
            <span className="float-right word-spacing-20pt">
                {/* <a href="/about"> 
                <span className="text-xl text-blue-1 text-bold"> About</span>
                </a> */}
                <a href="/projects"> 
                <span className="text-xl text-blue-1 text-bold"> Projects</span>
                </a>
                <a href="/contact"> 
                <span className="text-xl text-blue-1 text-bold"> Contact</span>
                </a>
            </span>
            </p>
        </div>
    </div>
    );
}