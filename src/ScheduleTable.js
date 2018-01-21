import React from 'react';
import { Table } from 'semantic-ui-react';

const ScheduleTable = () => {
  return (
    <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>To</Table.HeaderCell>
            <Table.HeaderCell>Departure</Table.HeaderCell>
            <Table.HeaderCell>Arrival</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>Skopje</Table.Cell>
            <Table.Cell>12:00 AM</Table.Cell>
            <Table.Cell>3:20 AM</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
            <Table.Cell>Running on time.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>Skopje</Table.Cell>
            <Table.Cell>4:00 AM</Table.Cell>
            <Table.Cell>7:50 AM</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
            <Table.Cell>Running on time.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>Skopje</Table.Cell>
            <Table.Cell>10:00 AM</Table.Cell>
            <Table.Cell>01:20 PM</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
            <Table.Cell>Canceled.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>Ohrid</Table.Cell>
            <Table.Cell>10:00 AM</Table.Cell>
            <Table.Cell>11:00 AM</Table.Cell>
            <Table.Cell>Departed</Table.Cell>
            <Table.Cell>Running on time.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>Strumica</Table.Cell>
            <Table.Cell>10:00 AM</Table.Cell>
            <Table.Cell>01:00 PM</Table.Cell>
            <Table.Cell>Departed</Table.Cell>
            <Table.Cell>+12 min.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Skopje</Table.Cell>
            <Table.Cell>Beograd</Table.Cell>
            <Table.Cell>02:20 PM</Table.Cell>
            <Table.Cell>08:50 PM</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
            <Table.Cell>Delayed.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>Beograd</Table.Cell>
            <Table.Cell>04:35 PM</Table.Cell>
            <Table.Cell>01:00 AM</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
            <Table.Cell>Running on time.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ohrid</Table.Cell>
            <Table.Cell>Bitola</Table.Cell>
            <Table.Cell>11:00 AM</Table.Cell>
            <Table.Cell>12:10 PM</Table.Cell>
            <Table.Cell>Departed</Table.Cell>
            <Table.Cell>Running on time.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ohrid</Table.Cell>
            <Table.Cell>Skopje</Table.Cell>
            <Table.Cell>06:15 AM</Table.Cell>
            <Table.Cell>10:00 AM</Table.Cell>
            <Table.Cell>Arriving</Table.Cell>
            <Table.Cell>-2 min.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ohrid</Table.Cell>
            <Table.Cell>Beograd</Table.Cell>
            <Table.Cell>03:55 AM</Table.Cell>
            <Table.Cell>09:40 AM</Table.Cell>
            <Table.Cell>Arrived</Table.Cell>
            <Table.Cell>On time.</Table.Cell>
          </Table.Row>
        </Table.Body>
    </Table>
  );
}

export default ScheduleTable;