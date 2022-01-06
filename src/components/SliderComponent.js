import "../styles/SliderComponent.css"

const SliderComponent = ({ id, min, max, value, onChange }) => {
    return (
        <div className="slide-container">
            <input type="range" min={min} max={max} value={value}
                className="slider" id={id} onChange={onChange} />
        </div>
    )
}

export default SliderComponent;