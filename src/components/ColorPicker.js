import "../css/ColorPicker.css";
const ColorPicker = (props) => {

    return (
        <div className="color_list">
            {props.colors.map((color, index) => {
                return <div
                    className="color"
                    onClick={() => {
                        if (props.isOnCart) {
                            console.log("ON cart");
                            props.onCartChange(color.code, props.productCode, props.productId);
                        } else {
                            props.onPick(color.code);
                        }
                    }}
                    style={{ background: color.code }}
                    key={index + new Date()}>
                </div>
            })}
        </div>
    )
}
export default ColorPicker;