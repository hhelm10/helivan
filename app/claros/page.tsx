'use client'

export default async function Claros() {
    return (
    <div>
      <div className="static-header text-blue-4 text-2xl">
        <div> <a href="/"> <img src={"/favicon.png"} width='3.4%'/> </a>
        </div>
        <div className="float-right word-spacing-20pt font-impact center-vertical">
            <a href="/claros"> 
                <span className="text-4xl"> claros</span>
            </a>
            <a href="/explore"> 
                <span> explore</span>
            </a>
            <a href="/research"> 
                <span> research</span>
            </a>
            <a href="/about"> 
                <span> about</span>
            </a>
        </div>
      </div>
        <div className="text-center margin-top-30 font-deja-vu">
            <p className="text-xl text-blue-1"> coming soon.</p>
            <p className="text-xl text-blue-1"> email us: info@helivan.io</p>
        </div>
    </div>
    );
}