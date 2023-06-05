import './pages.css';
export default function ReactPage(){
    return(
        <div>
            <div className='pageDiv'>
                <div className='pageHeader'>React Resources</div>
                <div className="pageContentDiv">
                    <div className="videoselectDiv">
                        Test
                    </div>
                    <div className="videoDiv">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen = "true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}