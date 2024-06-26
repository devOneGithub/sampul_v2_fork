import toast from 'react-hot-toast';
import { supabase } from './supabase';

export const getUserApi = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    if (error.status == 403) {
      toast.error('Please sign in again to continue');
    } else {
      toast.error(error.message);
    }
  }
};

export const getProfileApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('uuid', postData.uuid)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getRoleApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('roles')
      .select('*')
      .eq('uuid', postData.uuid)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getAccountApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('accounts')
      .select('*, products (*)')
      .eq('uuid', postData.uuid)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getBodiesApi = async () => {
  try {
    const { data, error } = await supabase
      .from('bodies')
      .select('*')
      .eq('active', true);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getDigitalAssetsApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('digital_assets')
      .select('*')
      .eq('uuid', postData.uuid)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getBelovedApi = async (postData) => {
  try {
    const response = await fetch('/api/beloved/all-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uuid: postData.uuid,
      }),
    });

    if (!response.ok) {
      throw error;
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getInvitesApi = async (postData) => {
  try {
    const response = await fetch('/api/beloved/invite-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: postData.email,
      }),
    });

    if (!response.ok) {
      throw error;
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getExtraWishesApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('extra_wishes')
      .select('*')
      .eq('uuid', postData.uuid);

    if (error) {
      throw error;
    }

    return data.length > 0 ? data[0] : null;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getWillApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('wills')
      .select(`*, profiles ( * )`)
      .eq('uuid', postData.uuid);

    if (error) {
      throw error;
    }

    return data.length > 0 ? data[0] : null;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getInformDeathApi = async (postData) => {
  try {
    const { data, error } = await supabase
      .from('inform_death')
      .select('*')
      .eq('uuid', postData.uuid);

    if (error) {
      throw error;
    }

    return data.length > 0 ? data[0] : null;
  } catch (error) {
    toast.error(error.message);
  }
};
