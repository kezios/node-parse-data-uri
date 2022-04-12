import { readFileSync } from 'fs';
import { join } from 'path'

import { ParsedUri } from './../type';
import parseDataUri from '../';

const testFile = readFileSync(
  join(__dirname, 'test.datauri'),
  {encoding: 'utf-8'}
)


describe('parse-data-uri', () => {
  it('returns an object', ()=>{
    const parsed = parseDataUri(testFile);
    expect(Object.keys(parsed)).toEqual(['mimeType', 'data', 'name']);    
  })

  it('parses mime type', ()=>{
    const parsed = parseDataUri(testFile);
    expect(parsed.mimeType).toBe('image/gif');    
  })

  it('parses additionals info', ()=>{
    interface CustomParsed extends ParsedUri {
      name: string;
    }

    const parsed = parseDataUri(testFile) as CustomParsed;
    expect(parsed.name).toBe('test');    
    
  })

  it('decodes the buffer', ()=>{
    const parsed = parseDataUri(testFile);
    expect(parsed.data).toBeInstanceOf(Buffer);    
  })

})