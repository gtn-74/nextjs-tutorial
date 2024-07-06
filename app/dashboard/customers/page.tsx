// 'use client';
import { Ratings } from '@/app/ui/customers/Ratings';
import { Typography } from '@mui/material';
// import { CustomersTable } from '@/app/ui/customers/table';
import Table from '@/app/ui/customers/table';
import { CustomersTableType } from '@/app/lib/definitions';

export default function Page() {
  return (
    <>
      <Typography
        // variant='h1'
        fontSize={50} //px
        color={'#f34'} //色(多分props色も可変できる。css in jsかなんかしらで)
      >
        トライ1
      </Typography>
      <Ratings />
      <Table customers={[]} />
      
    </>
  );
}
