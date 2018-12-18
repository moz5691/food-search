import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const Form = props => {
  return (
    <div className="ui container">
      <form
        className="ui form"
        onSubmit={props.getRecipe}
        style={{ marginBottom: '2rem' }}
      >
        <Input focus placeholder="Search.." type="text" name="recipeName" />
        <Button primary>Search</Button>
      </form>
    </div>
  );
};

export default Form;
