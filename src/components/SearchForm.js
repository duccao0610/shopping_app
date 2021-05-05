import { Search } from "react-feather";
import "../css/SearchForm.css";
function SearchForm(props) {
    const handleSearch = (e) => {
        e.preventDefault();
        props.handleSearch(e.target.value);
    }
    return (
        <form className="search_form">
            <div className="form_group">
                <Search />
                <input className="search_form__input" placeholder="Tìm kiếm sản phẩm" onChange={handleSearch} />
            </div>
        </form>
    )
}
export default SearchForm
