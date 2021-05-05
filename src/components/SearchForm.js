import { Search } from "react-feather";
import "../css/SearchForm.css";
function SearchForm() {
    return (
        <form className="search_form">
            <div className="form_group">
                <Search />
                <input className="search_form__input" placeholder="Tìm kiếm sản phẩm" />
            </div>
        </form>
    )
}
export default SearchForm
