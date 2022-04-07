import searchIcon from '../images/searchIcon.svg'

export const Search = () => {
    return ( 
        <div className="search">
            <div className="container">
            <img onClick={handleEnter} src={searchIcon} alt="" />
            <input onKeyDown={handleEnter} type="text" placeholder="Search" />
            </div>
        </div>
     );
}


const handleEnter = (e) => {
    console.log(e)
    if (e.keyCode == 13 || e._reactName=== "onClick"){
        alert('lanching search');
    }
}
 
