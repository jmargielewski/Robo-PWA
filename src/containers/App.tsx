import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './App.css';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {
  onRequestRobots: () => {};
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
  searchField: string;
  isPending: boolean;
  robots: Array<IRobot>,
}

export class App extends Component<IAppProps> {
  componentDidMount(): void {
    this.props.onRequestRobots();
  }

  filterRobots = (): IRobot[] => 
    this.props.robots.filter((robot: IRobot) =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));

  render(): JSX.Element {
    const { onSearchChange, isPending } = this.props;
    
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
