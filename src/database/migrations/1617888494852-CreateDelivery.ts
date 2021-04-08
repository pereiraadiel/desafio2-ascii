import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDelivery1617888494852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "deliveries",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                    name: "weight",
                    type: "decimal"
                },
                {
                    name: "street_address",
                    type: "varchar"
                },
                {
                    name: "number",
                    type: "varchar"
                },
                {
                    name: "neighborhood",
                    type: "varchar"
                },
                {
                    name: "referential",
                    type: "varchar"
                },
                {
                    name: "city",
                    type: "varchar"
                },
                {
                    name: "state",
                    type: "varchar"
                },
                {
                    name: "country",
                    type: "varchar"
                },
                {
                    name: "lat",
                    type: "integer"
                },
                {
                    name: "log",
                    type: "integer"
                },
                // {
                //   name: "created_at",
                //   type: "timestamp",
                //   isNullable: false,
                // },
                // {
                //   name: "updated_at",
                //   type: "timestamp",
                //   isNullable: true,
                // },
              ],
            })
          );
        //   await queryRunner.query(
        //     "ALTER TABLE deliveries ALTER COLUMN created_at SET DEFAULT NOW()"
        //   );
        //   await queryRunner.query(
        //     "ALTER TABLE deliveries ALTER COLUMN updated_at SET DEFAULT NOW()"
        //   );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliveries");
    }

}
