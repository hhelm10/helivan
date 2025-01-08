export default async function About() {
    return (
    <div>
       <div className="static-header">
        <div> 
            <a href="/"> <img src={"/favicon.png"} width='85rem'/> </a>
        </div>
        <div className="text-blue-4 text-2xl float-right word-spacing-20pt font-impact center-vertical">
            <a href="/claros"> 
                <span> claros</span>
            </a>
            <a href="/explore"> 
                <span> explore</span>
            </a>
            <a href="/research"> 
                <span> research</span>
            </a>
            <a href="/about"> 
                <span className="text-4xl"> about</span>
            </a>
        </div>
      </div>
        <div className="text-xl text-blue-1 text-center margin-top-30 text-deja-vu">
            <p className="text-4xl text-bold"> Contact Us //</p>
            <p> for questions & comments on projects, collaboration opportunities, and general inquiries</p>
            <p> email us: info@helivan.io.</p>
    </div>
    </div>
    );
}