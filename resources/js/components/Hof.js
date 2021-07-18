import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
    },
});

const Hof = () => {
    const tableRef = React.createRef();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <React.Fragment>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                
                showLabels
            >
                <BottomNavigationAction label="List1" icon={<RestoreIcon />} />
                <BottomNavigationAction label="List2" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="List3" icon={<LocationOnIcon />} />
            </BottomNavigation>
            <div className={classes.root}>
                <MaterialTable
                    title="Legends"
                    tableRef={tableRef}
                    columns={[
                      {
                        title: 'Avatar',
                        field: 'avatar',
                        render: rowData => (
                          <img
                            style={{ height: 36, borderRadius: '50%' }}
                            src={rowData.avatar}
                          />
                        ),
                        headerStyle: {
                            backgroundColor: '#039be5',
                          },
                      },
                      { title: 'Id', field: 'id' },
                      { title: 'First Name', field: 'first_name' },
                      { title: 'Last Name', field: 'last_name' },
                    ]}
                    data={query =>
                        new Promise((resolve, reject) => {
                          let url = 'https://reqres.in/api/users?'
                          url += 'per_page=' + query.pageSize
                          url += '&page=' + (query.page + 1)
                          fetch(url)
                            .then(response => response.json())
                            .then(result => {
                              resolve({
                                data: result.data,
                                page: result.page - 1,
                                totalCount: result.total,
                              })
                            })
                        })
                      }
                    options={{
                        search: false,
                        icon: 'refresh',
                        tooltip: 'Refresh Data',
                        isFreeAction: true,
                        headerStyle: {
                            backgroundColor: '#039be5',
                          },
                        onClick: () => tableRef.current && tableRef.current.onQueryChange(),
                    }}
                />
            </div>
        </React.Fragment>
    );
};

export default Hof;

//test case https://codesandbox.io/s/material-demo-forked-vnkp9?file=/demo.js
//source https://material-table.com/#/docs/get-started and for buttons  https://codesandbox.io/s/2zii7?file=/demo.js:607-1023
