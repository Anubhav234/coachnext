import React from 'react'
import style from "../styles/Search.module.css"

const Search = () => {
    return (
        <div className={style.searchitem}>
          <div className={style.jess}>
             <h2 className={style.titlename}>COACH</h2>
             <input class={style.searchfield} type="text" name="q" data-qa="cm_inp_field_search" placeholder="Search" role="combobox" aria-describedby="search-assistive-text" aria-haspopup="listbox" aria-owns="search-results" aria-expanded="false" aria-autocomplete="list" aria-activedescendant="" aria-controls="search-results" aria-label="Enter Keyword or Item Number" data-placeholder="Search" data-focus-placeholder="What can we help you find?" autocomplete="off"></input>
              {/* <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
              </button> */}
         </div>
        </div>

    )
}
export default Search;
