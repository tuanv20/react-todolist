import React, { useEffect } from 'react';
import {useState} from 'react';
import TaskService from '../../services/TaskService'

export default function PageNav(props) {
    const [pages, setPages] = useState(0);
    const [pageArray, setPageArray] = useState([]);
    const [currPage, setCurrPage] = useState(1);
 
    useEffect( () => {
        //Maximum of 5 tasks per page
        setPages(parseInt(props.taskProp.length / 6) + 1);
        console.log("Pages: " + pages)
    }, [props.taskProp])

    useEffect( () =>{
        let setArr = [];
        for(let i = 0; i < pages; i++){
            setArr.push(i+1);
        }
        setPageArray(setArr);
    }, [pages])

    let togglePage = function(page){
        props.changeGlobalPage(parseInt(page));
        setCurrPage(parseInt(page));
    }

    return(
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-sm">
                {currPage == 1 ?
                <li class="page-item disabled">
                    <a class="page-link" onClick={() => togglePage(currPage - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li> 
                :
                <li class="page-item">
                    <a class="page-link" onClick={() => togglePage(currPage - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li> 
                }
                
                {/* Creates an array from 1 to pages to map to the pages in the pagination nav*/}
                { pageArray.map(function(element){
                    if(currPage == element){
                        return <li class="page-item active"><a class="page-link" onClick={ (e) => togglePage(e.target.innerHTML)}>{element}</a></li>
                    }
                    else{
                        return <li class="page-item"><a class="page-link" onClick={ (e) => togglePage(e.target.innerHTML)}>{element}</a></li>
                    }
                })}

                {currPage == pages ? 
                <li class="page-item disabled">
                    <a class="page-link" onClick={() => togglePage(currPage + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                :
                <li class="page-item">
                    <a class="page-link" onClick={() => togglePage(currPage + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>}
            </ul>
        </nav>
    )
}