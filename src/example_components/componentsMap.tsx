import { AddElementFromInput } from "./AddElementFromInput";
import { ArrayList } from "./ArrayList";
import { BindingInputsToArray } from "./BindingInputsToArray";
import { Counter } from "./Counter";
import { DelElemFromObjetsArray } from "./DelElemFromObjetsArray";
import { DeleteElementByIndex } from "./DeleteElementByIndex";
import { EditArray } from "./EditArray";
import { GenericFormToModifyArray } from "./GenericFormToModifyArray";
import { GenericFormToModifyArray2 } from "./GenericFormToModifyArray2";
import { GenericFormToModifyLettersArray } from "./generic_form_to_modify_letters_array";
import { IncreaseArray } from "./IncreaseArray";
import { SelectCity } from "./SelectCity";

export const componentsMap: any = [];
// key is field "nameComponent" in Contentful, value is corresponding React component
componentsMap["counter"] = Counter;
componentsMap["select_city"] = SelectCity;
componentsMap["increase_array"] = IncreaseArray;
componentsMap["delete_element_by_index"] = DeleteElementByIndex;
componentsMap["add_element_from_input"] = AddElementFromInput;
componentsMap["binding_inputs_to_array"] = BindingInputsToArray;
componentsMap["edit_array"] = EditArray;
componentsMap["generic_form_array"] = GenericFormToModifyArray;
componentsMap["del_elem_from_objects_array"] = DelElemFromObjetsArray;
