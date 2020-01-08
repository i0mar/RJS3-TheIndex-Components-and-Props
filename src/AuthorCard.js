import React from "react";

function AuthorCard(author) {
    console.log(author);

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
                <div className="image">
                <img
                    className="card-img-top img-fluid"
                    src={author.authorProp.imageUrl}
                    alt={author.authorProp.first_name + " " + author.authorProp.last_name}
                />
                </div>
                <div className="card-body">
                <h5 className="card-title">
                    <span>
                    {author.authorProp.first_name + " " + author.authorProp.last_name}
                    </span>
                </h5>
                <small className="card-text">
                    {author.authorProp.books.length} books
                </small>
                </div>
            </div>
        </div>
    );
}

export default AuthorCard;