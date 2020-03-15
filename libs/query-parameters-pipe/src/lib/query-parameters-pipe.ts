import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

enum ACCEPTED_QUERY_PARAMETERS {
  LIMIT = 'limit',
  OFFSET = 'offset',
  SORTING_BY = 'sorting_by',
}

enum FILTER_OPERATORS {
  GREATER_THAN_EQUAL = 'gte',
  GREATER_THAN = 'gt',
  LESS_THAN_EQUAL = 'lte',
  LESS_THAN = 'lt',
  EQUAL = 'eq',
}

@Injectable()
export class QueryParametersPipe implements PipeTransform {
  constructor(private schema: Record<string, any>) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    let res = null;
    if (metadata.type === 'query') {
      console.log(value);
      res = [];
      Object.entries(value).map(entry => {
        // check if entry key exists
        if (this.validateKey(entry[0])) {
          res.push({
            parameter: entry[0],
            value:
              typeof entry[1] === 'string' ? entry[1].split(':')[1] : entry[1],
            // TODO: check if operator is in FILTER_OPERATORS
            operator:
              typeof entry[1] === 'string' ? entry[1].split(':')[0] : null,
          });
        }
      });
    }
    console.log(res);
    return res;
  }

  validateKey(key: string): boolean {
    return (
      Object.values(ACCEPTED_QUERY_PARAMETERS).includes(key) ||
      Object.getOwnPropertyNames(this.schema).includes(key)
    );
  }
}
