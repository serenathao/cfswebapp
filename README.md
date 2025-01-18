This implementation is kept short and simple under time constraints.
Since the data has 100K entries, the data table has been divided into pages for ease of viewing.
I used the libraries axios to handle communication with the BE, Material UI for the pagination component,
and react-table-library to render the data table. These libraries have been widely used and are easy to integrate.

There is a place in the FE code where the number of database entries has been hard-coded in the FusionDataPagination file. This would lead to maintainability issue if the DB changes.
If I had more time, I would have implemented this part so that the data gets the actual COUNT from the DB.

Some additional features I would have liked to build but did not have time are:
- Enable the user to hide and display certain columns with the help of checkboxes and dimension names as labels.
- Enable the user to set the number of significant digits to display for each dimension.
- Enable the user to graph a simple line or dot graph by selecting the X dimension and the Y dimension. This would allow the user to better visualize the relationship between any 2 columns since I noticed the data is a bit hard to go through. Both X and Y dimensions must be numerical.
