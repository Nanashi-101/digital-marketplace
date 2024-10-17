'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react'

function SelectPrice() {
//   const [price, setPrice] = React.useState<number>(0);
  return (
    <div className="grid grid-cols-3  gap-x-3">
      <Input
        type="number"
        placeholder="Enter the price of your product"
        className="col-span-2"
      />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Currency"></SelectValue>
        </SelectTrigger>
        <SelectContent align='center'>
          <SelectItem value="PLN">PLN</SelectItem>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="INR">INR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectPrice
