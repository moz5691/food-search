import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react';

const Recipes = props => {
  return (
    <div className="ui container">
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          {props.recipes.map(recipe => (
            <Card>
              <Image src={recipe.image_url} alt={recipe.title} />
              <Card.Content>
                <Card.Header>
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 20)}...`}
                </Card.Header>
                <Card.Description>
                  {' '}
                  Publisher: <span>{recipe.publisher}</span>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  <Button primary>Link: TBD</Button>
                </Link>
              </Card.Content>
            </Card>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Recipes;
