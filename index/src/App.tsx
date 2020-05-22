import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
//import logo from './logo.svg';
import './App.css';
import data, { CatalogEntry } from './data/catalog'

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function App() {
  const classes = useStyles();

  const renderCatalog = (entry: CatalogEntry) => (
    <TreeItem 
      key={entry.id}
      nodeId={entry.id}
      label={entry.name}
      onClick={()=>{window.location.href=entry.link}}
    />
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={['root']}
    >
      <TreeItem key={data.id} nodeId={data.id} label={data.name}>
      {data.entry.map((entry: CatalogEntry)=>renderCatalog(entry))}
      </TreeItem>
    </TreeView>
  );
}

export default App;
