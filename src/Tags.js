import Tag from "./Tag";

function Tags(props) {
    return (
        <div className="tags">
            {
                props.tags.map(x => {
                    return <Tag tag={x} ></Tag>
                })
            }
        </div>
    )
}

export default Tags;