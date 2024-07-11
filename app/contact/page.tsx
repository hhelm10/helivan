export default async function ContactUs() {
    return (
    <div>
        <div className="static-header">
            <p className='text-blue-1 text-bold text-4xl font-arial-black'> <a href="/"> HLVN// </a>
            <span className="float-right word-spacing-20pt font-latin">
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
        <div className="text-center margin-top-30">
            <p className="text-4xl text-blue-5 text-bold"> Contact Us //</p>
            <p className="text-xl text-blue-5"> for questions & comments on projects, collaboration opportunities, and general inquiries</p>
            <p className="text-xl text-blue-5"> email us at <a href='info@helivan.io'> info@helivan.io </a></p>
        </div>
    </div>
    );
}