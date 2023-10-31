import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {useState} from 'react';
import CustomSectionList from '../components/CustomSectionList';

const TopGainersScreen = () => {
  const [data, setData] = useState([
    {
      2: '0276',
      3: 'ADB',
      78: '100',
      87: '0.800',
      88: '25',
      89: '2,082,385',
      90: '190926286.000',
      133: '0.795',
      134: '3,818',
      135: 51,
      136: '0.800',
      137: '1,855',
      138: 13,
      152: '0.000',
      153: '0.330',
      223: '41.59',
      224: '440400000.000',
      272: '0.470',
      273: '142.424',
    },
    {
      2: '4707',
      3: 'NESTLE',
      28: 1,
      78: '100',
      87: '135.000',
      88: '1',
      89: '56',
      90: '756290.000',
      133: '135.000',
      134: '19',
      135: 6,
      136: '135.100',
      137: '14',
      138: 7,
      152: '134.800',
      153: '134.800',
      223: '20.75',
      224: '31657500000.000',
      272: '0.200',
      273: '0.148',
    },
    {
      2: '0573C2',
      3: 'MSFT-C2',
      78: '100',
      87: '0.655',
      88: '1',
      89: '1',
      90: '65.000',
      133: '0.650',
      134: '2,000',
      135: 1,
      136: '0.655',
      137: '2,000',
      138: 1,
      152: '0.470',
      153: '0.470',
      223: '100.00',
      224: '65500000.000',
      272: '0.185',
      273: '39.362',
    },
    {
      2: '5136',
      3: 'HEXTECH',
      78: '100',
      87: '22.960',
      88: '2',
      89: '3',
      90: '6892.000',
      133: '22.800',
      134: '5',
      135: 1,
      136: '23.200',
      137: '1',
      138: 1,
      152: '22.780',
      153: '22.780',
      223: '33.33',
      224: '2953781040.000',
      272: '0.180',
      273: '0.790',
    },
    {
      2: '1082',
      3: 'HLFG',
      78: '100',
      87: '18.260',
      88: '1',
      89: '461',
      90: '841316.000',
      133: '18.240',
      134: '11',
      135: 5,
      136: '18.280',
      137: '40',
      138: 8,
      152: '18.120',
      153: '18.120',
      223: '67.90',
      224: '20953658411.400',
      272: '0.140',
      273: '0.773',
    },
    {
      2: '0183',
      3: 'SALUTE',
      78: '100',
      87: '1.060',
      88: '10',
      89: '512,412',
      90: '51309955.000',
      133: '1.060',
      134: '1,610',
      135: 21,
      136: '1.070',
      137: '472',
      138: 4,
      152: '0.925',
      153: '0.925',
      223: '54.57',
      224: '452090000.000',
      272: '0.135',
      273: '14.595',
    },
    {
      2: '3689',
      3: 'F&N',
      78: '100',
      87: '27.300',
      88: '1',
      89: '834',
      90: '2275302.000',
      133: '27.280',
      134: '60',
      135: 10,
      136: '27.300',
      137: '25',
      138: 2,
      152: '27.180',
      153: '27.180',
      223: '54.92',
      224: '10013053077.300',
      272: '0.120',
      273: '0.442',
    },
    {
      2: '4286',
      3: 'SEAL',
      28: 7,
      78: '100',
      87: '0.435',
      88: '95',
      89: '491,011',
      90: '20762693.000',
      133: '0.430',
      134: '2,182',
      135: 15,
      136: '0.435',
      137: '1,134',
      138: 1,
      152: '0.330',
      153: '0.330',
      223: '55.99',
      224: '138040856.370',
      272: '0.105',
      273: '31.818',
    },
    {
      2: '052816',
      3: 'APPLE-C16',
      78: '100',
      87: '0.585',
      88: '1',
      89: '1',
      90: '58.000',
      133: '0.580',
      134: '2,000',
      135: 1,
      136: '0.585',
      137: '2,000',
      138: 1,
      152: '0.485',
      153: '0.485',
      223: '100.00',
      224: '58500000.000',
      272: '0.100',
      273: '20.619',
    },
    {
      2: '528512',
      3: 'SIMEPLT-C12',
      78: '100',
      87: '0.115',
      88: '100',
      89: '100',
      90: '1150.000',
      133: '0.005',
      134: '2,000',
      135: 1,
      136: '0.010',
      137: '1,000',
      138: 1,
      152: '0.025',
      153: '0.025',
      223: '100.00',
      224: '9200000.000',
      272: '0.090',
      273: '360.000',
    },
    {
      2: '5347',
      3: 'TENAGA',
      78: '100',
      87: '9.140',
      88: '8',
      89: '22,916',
      90: '20927811.000',
      133: '9.140',
      134: '391',
      135: 25,
      136: '9.150',
      137: '719',
      138: 26,
      152: '9.050',
      153: '9.050',
      223: '56.15',
      224: '52583127170.940',
      272: '0.090',
      273: '0.994',
    },
    {
      2: '4863',
      3: 'TM',
      78: '100',
      87: '5.150',
      88: '8',
      89: '11,061',
      90: '5675874.000',
      133: '5.130',
      134: '1,942',
      135: 24,
      136: '5.150',
      137: '1,736',
      138: 35,
      152: '5.070',
      153: '5.070',
      223: '65.75',
      224: '19683182477.000',
      272: '0.080',
      273: '1.578',
    },
    {
      2: '2445',
      3: 'KLK',
      78: '100',
      87: '21.660',
      88: '1',
      89: '353',
      90: '764220.000',
      133: '21.620',
      134: '18',
      135: 10,
      136: '21.660',
      137: '21',
      138: 12,
      152: '21.600',
      153: '21.600',
      223: '26.63',
      224: '23414845223.100',
      272: '0.060',
      273: '0.278',
    },
    {
      2: '4936',
      3: 'MALPAC',
      78: '100',
      87: '0.990',
      88: '1',
      89: '1',
      90: '99.000',
      133: '0.800',
      134: '20',
      135: 1,
      136: '0.990',
      137: '19',
      138: 1,
      152: '0.930',
      153: '0.930',
      223: '0.00',
      224: '74250000.000',
      272: '0.060',
      273: '6.452',
    },
    {
      2: '1899',
      3: 'BKAWAN',
      78: '100',
      87: '21.700',
      88: '10',
      89: '9',
      90: '62902.000',
      133: '21.580',
      134: '10',
      135: 1,
      136: '21.760',
      137: '13',
      138: 3,
      152: '21.660',
      153: '21.660',
      223: '100.00',
      224: '8669919547.100',
      272: '0.040',
      273: '0.185',
    },
    {
      2: '999',
      3: 'ADB',
      78: '100',
      87: '0.800',
      88: '25',
      89: '2,082,385',
      90: '190926286.000',
      133: '0.795',
      134: '3,818',
      135: 51,
      136: '0.800',
      137: '1,855',
      138: 13,
      152: '0.000',
      153: '0.330',
      223: '41.59',
      224: '440400000.000',
      272: '0.470',
      273: '142.424',
    },
  ]);

  return <CustomSectionList dataReceived={data} animateIndex={0} />;
};

export default TopGainersScreen;
