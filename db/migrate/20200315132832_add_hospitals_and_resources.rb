class AddHospitalsAndResources < ActiveRecord::Migration[6.0]
  def change
    create_table :hospitals do |t|
      t.string :name, null: false
      t.json :resources
      t.timestamps
    end
  end
end
