import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Latest Orders" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  From
                </TableCell>
                <TableCell>
                  To
                </TableCell>
                <TableCell>
                  Currency
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
                {/* <TableCell sortDirection="desc">
                  Date
                </TableCell> */}
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow
                    hover
                    key={order._id}
                  >
                    <TableCell sx={{
                      textTransform: 'uppercase',
                      color: order.type=="deposit" ? "#4ff461" : order.type=="transfer"?"#38b3f0":"#f04438"
                    }}>
                      {order.type}
                    </TableCell>
                    <TableCell>
                      {order.from}
                    </TableCell>
                    <TableCell>
                      {order.to}
                    </TableCell>
                    <TableCell>
                      {order.currency}
                    </TableCell>
                    <TableCell>
                      {order.amount}
                    </TableCell>
                    {/* <TableCell>
                      -
                    </TableCell> */}
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
          onClick={() => {
            window.location.href = "/transactions";
          }}
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
