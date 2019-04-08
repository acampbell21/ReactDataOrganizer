import React, { Component } from 'react';
import { Header, Card, Grid, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
  cardGroupStyle: {
    minHeight: '100px',
    minWidth: '100px',
    display: 'flex',
  },
  listStyle: {
    padding: '15px',
  }
}

class OrderList extends Component {
  state = { orders: [] }

  componentDidMount() {
    fetch('/api/orders')
      .then( res => res.json() )
      .then( orders => this.setState({ orders }) )
  }


  render() {
    let { orders } = this.state;

    return (
      <Grid>
        { orders.map( o =>
          <Card.Group centered style={styles.cardGroupStyle} key={o.id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link to={`/orders/${o.id}`}>{o.name}</Link>
                </Card.Header>
                <Card.Meta>
                  {o.appointment_time}
                </Card.Meta>
                <Card.Description>
                  {o.description}
                  <List style={styles.listStyle}>
                    <List.Item>Bandaids</List.Item>
                    <List.Item>Neosporin</List.Item>
                    <List.Item>GoldBond</List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group> 
          )
        } 
      </Grid>
    );
  }
}

export default connect()(OrderList);