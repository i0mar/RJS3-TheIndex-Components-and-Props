import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(test) {
    const allAuthors = test.authorsArray.map(author => <AuthorCard key={author.first_name} authorProp={author} />);

    return (
        <div className="authors">
            <h3>Authors</h3>
            <div className="row">
              {allAuthors}              
            </div>
          </div>
    );
}

export default AuthorList;