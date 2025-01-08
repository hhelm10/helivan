'use client'

export default async function Claros() {
    return (
    <div>
      <div className="static-header text-blue-4">
        <div> <a href="/"> <img src={"/favicon.png"} width='67rem'/> </a>
        </div>
        <div className="text-2xl float-right word-spacing-20pt font-impact center-vertical">
            <a href="/claros"> 
                <span style={{fontSize:'2rem'}}> claros</span>
            </a>
            <a href="/explore"> 
                <span> explore</span>
            </a>
            <a href="/research"> 
                <span> research</span>
            </a>
            {/* <a href="/about"> 
                <span> about</span>
            </a> */}
        </div>
      </div>
        <div className="text-xl text-blue-1 font-deja-vu" style={{marginTop:'7rem', marginRight:'15%',marginLeft:'15%'}}>
            <p style={{textAlign:'left'}}><b>ask</b> relevant questions.</p>
            <p style={{textAlign:'right'}}><b>explore</b> the geometry of opinions.</p>
            <p style={{textAlign:'left'}}><b>interact</b> with impactful individuals.</p>
            <p style={{textAlign:'right'}}><b>predict</b> individual and aggregate behavior.</p>
            <p style={{textAlign:'left'}}><b>improve</b> resource allocation for real-network interventions.</p>
            <p className="mt-6" style={{textAlign:'right'}}> coming soon.</p>
            <p style={{textAlign:'right'}}> email us: info@helivan.io.</p>
        </div>
    </div>
    );
}