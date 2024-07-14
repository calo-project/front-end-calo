function TitleCard({title, children}){
    return(
        <> 
            <div className="collapse collapse-plus mt-4" style={{ backgroundColor: '#FAFAFA', color: '#000000' }}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">{title}</div>
                <div className="collapse-content">
                    <p>{children}</p>
                </div>
            </div>
        </>
    )
}


export default TitleCard

